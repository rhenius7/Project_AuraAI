from flask import Flask, Response
from flask_cors import CORS
from facial_emotion_recognition import EmotionRecognition
import cv2

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin access

# Initialize Emotion Recognition
er = EmotionRecognition(device='cpu')

def generate_frames():
    """Generator to stream frames from the webcam."""
    cam = cv2.VideoCapture(0)
    while True:
        success, frame = cam.read()
        if not success:
            break

        # Detect emotion on the current frame
        frame = er.recognise_emotion(frame, return_type='BGR')

        # Encode frame to JPEG format
        _, buffer = cv2.imencode('.jpg', frame)
        frame_bytes = buffer.tobytes()

        # Yield frame as part of an HTTP response (MJPEG stream)
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

    cam.release()
    cv2.destroyAllWindows()

@app.route('/video-feed')
def video_feed():
    """Route to stream video."""
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)
