from flask import request, jsonify, Flask
from flask_cors import CORS
import hmac
import hashlib
from flask_jwt_extended import jwt_required
import razorpay


app = Flask(__name__)
CORS(app)


def hmac_sha256(val, key):
    h = hmac.new(key.encode("ASCII"), val.encode(
        "ASCII"), digestmod=hashlib.sha256).hexdigest()
    return h


razorpay_key = 'rzp_live_eH6oSFaPlWJcF8'
razorpay_secret = 'hqcxidhxGXoXZz7ax9WVnxvs'
rzpay = razorpay.Client(auth=(razorpay_key, razorpay_secret))


@ app.route('/api/checkout', methods=['POST'])
def createOrder():
    reqdata = request.json
    rzresp = rzpay.order.create(data=reqdata)
    return jsonify(rzresp)


@app.route('/api/verify', methods=['POST'])
def verify():
    rcv_data = request.json
    params_dict = {"razorpay_order_id": rcv_data["razorpay_order_id"], "razorpay_payment_id": rcv_data["razorpay_payment_id"],
                   "razorpay_signature": rcv_data["razorpay_signature"]}
    gen_signature = hmac_sha256(
        params_dict['razorpay_order_id'] + "|" + params_dict['razorpay_payment_id'], razorpay_secret)
    if gen_signature == rcv_data['razorpay_signature']:
        rzpay.utility.verify_payment_signature(params_dict)
        return jsonify({"result": "this is done"})
    return jsonify({"result": "This transaction has been cancelled"})


if __name__ == "__main__":
    app.run(debug=True, host='localhost', port=8080)
