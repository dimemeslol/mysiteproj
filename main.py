import os

from dotenv import load_dotenv
from flask import Flask, render_template


load_dotenv()

ALLOWED_HOSTS = str(os.getenv('allowedhost'))

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('mem.html')


if __name__ == '__main__':
    app.run(host=ALLOWED_HOSTS, port=80)
