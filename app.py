# Importing the dependencies.
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

import pandas as pd
import sqlite3
import os

# Load Data
csv_path = 'Resources/spreadspoke_scores.xlsx'
csv_path2 = 'Resources/nfl_teams.csv'

#Edit Dataframes

games = pd.read_excel(csv_path)
games['scheduleDate'] = pd.to_datetime(games['scheduleDate'])
games = games[games['scheduleDate'] >= '2002-06-01' ]


teams = pd.read_csv(csv_path2)
print(teams.head())
print(games.head())


#Flask

app = Flask(__name__)

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/games"
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


