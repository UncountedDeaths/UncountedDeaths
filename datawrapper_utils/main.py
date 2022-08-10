# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.
from __future__ import annotations

import os
from enum import Enum
from typing import Dict, Tuple

import requests
import json

BASE_URL = "https://api.datawrapper.de/v3/"


class ChartType(str, Enum):
    choropleth = "d3-maps-choropleth"


def create_base_graph() -> str:
    token = os.environ['token']
    headers = {'Authorization': f'Bearer {token}', 'content-type': 'application/json'}
    r = requests.post(BASE_URL + "charts", headers=headers)
    return r.json()['id']


def apply_graph_settings(id: str, settings_template: str, settings: Dict[str, str]):
    """
    This function takes the specified graph ID, settings and template and applies it to
    the graph. It uses the PATCH API call so that the template doesn't have to be complete.
    That means it merges things with existing settings
    :param id: ID of graph on which to apply settings
    :type id: str
    :param settings_template: String that represents the settings template. NOTE: NOT A PATH
    :type settings_template: str
    :param settings: Dictionary of settings to apply
    :type settings: Dict[str, str]
    :return: None
    :rtype: None
    """
    token = os.environ['token']
    headers = {'Authorization': f'Bearer {token}', 'content-type': 'application/json'}
    new_settings = settings_template
    for key, value in settings.items():
        replace_key = "&{" + key + "}&"
        new_settings = new_settings.replace(replace_key, value)
    r = requests.patch(BASE_URL + "charts/" + id, json=json.loads(new_settings), headers=headers)
    if r.status_code > 299:
        raise Exception("Failed to perform action, aborting")


def get_graph_settings(chart_id: str):
    """
    This fetches the settings of the specified grpah.
    Returns the json
    :param chart_id: ID of chart to fetch settings for
    :type chart_id: str
    :return: JSON of settings
    :rtype: JSON
    """
    token = os.environ['token']
    headers = {'Authorization': f'Bearer {token}', 'content-type': 'application/json'}
    r = requests.get(BASE_URL + "charts" + chart_id, headers=headers)
    return r.json()


def create_linked_graphs(settings_base: Dict[str, str], template_path: str) -> Tuple[str, str]:
    """
    This function creates two graphs that are linked to each other. This means they use the button so that they
    can switch between each other

    :param settings_base: This should be a dict of all the common keys set. The distinct one(year, other_id etc) should
    be unset and will be set by this function
    :type settings_base: Keys: string, Value: string
    :param template_path: Path to the template
    :type template_path: str
    :return: The IDs of the created graphs. First one is 2020, seccond one is 2021
    :rtype:
    """
    map2020 = create_base_graph()
    map2021 = create_base_graph()
    settings_2021 = settings_base
    settings_2021['YEAR'] = "2021"
    settings_2021['OTHER_YEAR'] = "2020"
    settings_2021['OTHER_ID'] = map2020
    settings_2020 = settings_base
    settings_2020['YEAR'] = "2020"
    settings_2020['OTHER_YEAR'] = "2021"
    settings_2020['OTHER_ID'] = map2021
    apply_graph_settings(map2020, template_path, settings_2020)
    apply_graph_settings(map2021, template_path, settings_2021)
    return map2020, map2021


def create_single_graph(settings: Dict[str, str], template_path: str) -> str:
    """
    This creates a single graph with the specified settings
    :param settings: Dictionary of the desired settings
    :type settings: str, str
    :param template_path: Path to template
    :type template_path: str
    :return: ID of created graph
    :rtype: str
    """
    map_id = create_base_graph()
    apply_graph_settings(map_id, template_path, settings)
    return map_id


"""
Replace Keys
FULL_STATE_Label = Full State Name for label
FULL_STATE = state for datawrapper purposes. Must match the datawrapper map classes
Year = yyyy
DATA_URL = full data url to csv file
OTHER_YEAR = Sister graph to this, the the year
OTHER_ID = ID for other map and other year
FOLDER_ID = ID of folder this should belong in. Must be set to folder ID or `null`


"""
if __name__ == '__main__':
    # map2020 = create_base_graph()
    data_sources = [{"name": "source-1", "url": "url-test"}, {"name": "source-2", "url": "source-url-2"}]
    single_state = {"state": "state-name", "sources": data_sources}
    master_output = []
    master_output.append(single_state)
    single_state = {"state": "state-name-2", "sources": data_sources}
    master_output.append(single_state)
    with open("state_output.json", 'w') as f:
        json.dump(master_output, f, indent=4)

    # map2020 = "XcJm8"
    # map2021 = "QXCkz"
    # settings_2020 = {"FULL_STATE_LABEL": "Alabama", "FULL_STATE": "alabama", "YEAR": "2020",
    #                  "DATA_URL": "https://raw.githubusercontent.com/UncountedDeaths/UncountedDeathsData/main"
    #                              "/ExcessDeathRates/Alabama.csv",
    #                  "OTHER_YEAR": "2021",
    #                  "OTHER_ID": map2021, "FOLDER_ID": "111267"}
    # settings_2021 = {"FULL_STATE_LABEL": "Alabama", "FULL_STATE": "alabama", "YEAR": "2021",
    #                  "DATA_URL": "https://raw.githubusercontent.com/UncountedDeaths/UncountedDeathsData/main"
    #                              "/ExcessDeathRates/Alabama.csv",
    #                  "OTHER_YEAR": "2020",
    #                  "OTHER_ID": map2020, "FOLDER_ID": "111267"}
    #
    # with open('./state_excess_death_template.json', 'r') as f:
    #     template = f.read()
    # apply_graph_settings(map2020, template, settings_2020)
    # apply_graph_settings(map2021, template, settings_2021)
