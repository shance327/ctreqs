# ctreqs

## How to install and deploy the app
- Clone the project from Github through an IDE like Intellij
- Click 'Import changes' to imports all the Maven dependency when the project opens
- In Intellij, on the right side, select Maven -> Profiles -> check 'sql', then click 'Import changes' when it pops up  
- Still in Maven, click 'ctreqs' dropdown -> lifecycle -> clean -> install (will take some time for the first time)
- This will install node locally and create a deployable JAR in the 'target' folder
- Navigate to the target folder
- Right click on the ctreqs-0.0.0-SNAPSHOT.jar -> Run
- Go to localhost:8080
