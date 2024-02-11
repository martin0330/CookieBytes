from flask import Flask, send_file
import matplotlib.pyplot as plt
import numpy as np
import io

app = Flask(__name__)

@app.route('/plot')
def plot():
    # Create a simple plot
    x = np.linspace(0, 10, 100)
    y = np.sin(x)
    plt.plot(x, y)

    # Save the plot to a BytesIO object
    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)

    return send_file(img, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)