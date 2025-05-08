# How can you run the API and the demo website locally? 

## 2025-05-07 18:12:55

This folder includes the API that calls on our Supabase backend. When you are done with this setup, you should be able to run the web app (Fake BMA) and it will pull data from this API (drawfi_bma_api). 

First, put each `.env` file in the right place in the root directory. There should be 2 `.env` files: one for this project and one for the Fake BMA web app project. 

Second, set up this project and run the API using the instructions in the README.md (included in this folder). 

Verify that the server is running on port 3000. 

Third, go to the Fake BMA project and follow the instructions in the README.md. Verify that the web app is running on localhost:5173 and paste that URL into your browser. You should see the web app load successfully. 

If there is a problem with connection, double check 1) that the fake BMA web app is connected to the API, and 2) that the API is connected to the database. 