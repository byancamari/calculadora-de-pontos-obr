from flask import Flask, render_template, request, redirect, url_for
from werkzeug.datastructures import ImmutableMultiDict
import json

app = Flask(__name__)

@app.route('/', methods=["GET", "POST"])
def main():
    if request.method == "POST":
        response = request.form.to_dict(flat=True)
        for x in response.values():
            if x == '':
                return 'Preencha todos os campos!'
        try:
            for x in ("obstaculos", "passagem", "redutores", "ib", "rampa", "percurso", "vitimas-vivas", "vitimas-mortas", "gap", "gangorra"):
                response[x] = int(response[x])
        except Exception as e:
            print(e)
            return 'Preencha todos os campos!'
        response["pontuacao"] = int(response["obstaculos"]) * 15 + int(response["passagem"]) * 10 + int(response["redutores"]) * 5 + int(response["ib"]) * 10 + int(response["rampa"]) + int(response["gap"]) * 10 + int(response["gangorra"]) * 15
        try: dictlist = json.load(open('tentativas.json'))
        except: dictlist = []
        response["ordem"] = len(dictlist) + 1
        if len(dictlist) == 0:
            response["pontuacao"] += int(response["percurso"]) * 60 + int(response["vitimas-vivas"]) * 66 + int(response["vitimas-mortas"]) * 55
        elif len(dictlist) == 1:
            response["pontuacao"] += int(response["percurso"]) * 40 + int(response["vitimas-vivas"]) * 44 + int(response["vitimas-mortas"]) * 33
        elif len(dictlist) == 2:
            response["pontuacao"] += int(response["percurso"]) * 20 + int(response["vitimas-vivas"]) * 22 + int(response["vitimas-mortas"]) * 11
        else:
            return 'Limite máximo de tentativas registradas excedido!'
        file = open('tentativas.json', 'w')
        dictlist.append(response)
        file.write(json.dumps(dictlist, ensure_ascii=False, indent=4))
        return redirect('/')
    try:
        loaded_dictlist = json.load(open('tentativas.json'))
    except:
        loaded_dictlist = []
    return render_template('index.html', lista_tentativas = loaded_dictlist)

@app.route('/limpar', methods=["POST"])
def limpar():
    open('tentativas.json', 'w').write('[]')
    return redirect('/')

if __name__ == '__main__':
    app.run()