# To reproduce
 - Run `yarn install --pure-lockfile`
 - Run `yarn turbo run build`

## Deploy a function
 - Run `gcloud functions deploy helloHttp --no-gen2 --region=europe-west3 --runtime=nodejs20 --trigger-http --allow-unauthenticated` a couple of times

Usually the first attempt deploys successfully, the second fails. Sometimes it seems to work a few times before failing.

## Deploy App Engine
 - Run `gcloud app deploy . --appyaml ./services/foo-service/app.yaml` a couple of times
 - Test the App after every deployment, usually the second one should fail with sharp error
