import sys, json, requests

def walletAddresssExtracor(userName):
    url = "https://api.opensea.io/user/"+userName+"?format=json"
    response = requests.get(url)
    temp = json.loads(response.text)
    return json.dumps(temp)


def accValidator( userName, walletAddress ):
    extractedWalletAddress = walletAddresssExtracor(userName);

print(walletAddresssExtracor(sys.argv[1]))