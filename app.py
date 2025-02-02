# Import dependencies
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

import pandas as pd
import sqlite3
import os
from flask_cors import CORS
# Apply CORS to your app (this stops security errors when running the dashboard containing apis from your own local computer)


#Connect to database to get data. 
conn = sqlite3.connect('Resources/football.db')

games = pd.read_sql('SELECT * FROM games', conn)
print(games.head())

teams = pd.read_sql('SELECT * FROM teams', conn)
print(teams.head())




#Edit Dataframes before sending data

games['scheduleDate'] = pd.to_datetime(games['scheduleDate'])
games = games[games['scheduleDate'] >= '2002-06-01' ]

games.fillna("NA", inplace=True)


teams.fillna("NA", inplace=True)




#Flask

app = Flask(__name__)
CORS(app)


@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br>"
        f"/games<br>"
        f"/teams"
    )
    


@app.route("/games")
def gamesAPI():

    return jsonify(games.to_dict(orient='records'))


@app.route("/teams")
def teamsAPI():
   

    return jsonify(teams.to_dict(orient='records'))


if __name__ == '__main__':
    app.run(debug=True)


