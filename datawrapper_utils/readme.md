# Datawrapper Automation Script
This script helps generate datawrapper graphs in a more automatic way. Currently 
it is partially complete.

# How it works
This script uses a series of templates(the JSON files in this folder) to apply 
settings to newly generated graphs. These templates are mostly direct copies of the 
settings as retrieved from the API. Then, they have had placeholder put in place
of the actual data so that it can easily be updated and applied.

For example, it might have a placeholder for the state name, or map name etc. 

Placeholders take the form of `&{place_holder_name}&`

When building these files start with a copy of the output from the endpoint `https://api.datawrapper.de/v3/charts/{chart_id}`

Remove fields that can't be set/not relevant. The update all map specific info with
placeholders that the script can use.

# Updates vs creations

If you already created a graph and you have the ID, you can update that graph instead 
of creating another one. The functions make how to do this pretty clear

# How to use
First, store your Datawrapper.de token in a `.env` file as follows
```
token=my_token
```

Nothing beyond this has been built yet

# Next Steps

The core of the program exists. What is missing are the parts to run things for all states etc.
This means pulling data like state names, file locations etc from some common file. Then using that
to run the functions for each graph type. Finally, outputting the data into something useful for
the website.