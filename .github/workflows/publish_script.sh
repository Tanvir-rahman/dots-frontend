#!bin/bash

set +ex

auth_pm_user() {
    npm config set '//registry.npmjs.org/:_authToken' $NODE_AUTH_TOKEN
    npm whoami
}

publish_packages() {
    echo "++++++++++++++ Publish packages ++++++++++++"
    npm install
    npm publish --access=public
    echo "______________ Publish complete _____________"
}

check_logs() {
    echo "+++++++++++++++ Show Logs +++++++++++++++++++"
    ls /home/runner/.npm/_logs/
    cat /home/runner/.npm/_logs/*.log
    echo "________________ Logs complete _______________"
}

main() {
    auth_pm_user
    publish_packages
    check_logs
}

main
