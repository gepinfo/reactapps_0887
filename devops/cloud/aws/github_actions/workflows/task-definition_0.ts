module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "tickets-0887",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-reactapps-0887-tickets:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8011",
                    "protocol": "tcp",
                    "hostPort": "8011"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@reactapps.local:27017/reactapps_0887?authSource=admin"},{"name":"MONGO_DOMAIN","value":"reactapps.local"},{"name":"CAMUNDAPOD_URL","value":"http://reactapps.local:8080"},{"name":"SECURITYURL","value":"http://reactapps.local:8003"},{"name":"AUTHPROXYURL","value":"http://reactapps.local:8001"},{"name":"ADMINURL","value":"http://reactapps.local:8004"},{"name":"CAMUNDAURL","value":"http://reactapps.local:8002"},{"name":"GCAMURL","value":"http://reactapps.local:8007"},{"name":"APIGATEWAY","value":"http://reactapps.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "reactapps"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/reactapps",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "types-0887",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-reactapps-0887-types:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8012",
                    "protocol": "tcp",
                    "hostPort": "8012"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@reactapps.local:27017/reactapps_0887?authSource=admin"},{"name":"MONGO_DOMAIN","value":"reactapps.local"},{"name":"CAMUNDAPOD_URL","value":"http://reactapps.local:8080"},{"name":"SECURITYURL","value":"http://reactapps.local:8003"},{"name":"AUTHPROXYURL","value":"http://reactapps.local:8001"},{"name":"ADMINURL","value":"http://reactapps.local:8004"},{"name":"CAMUNDAURL","value":"http://reactapps.local:8002"},{"name":"GCAMURL","value":"http://reactapps.local:8007"},{"name":"APIGATEWAY","value":"http://reactapps.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "reactapps"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/reactapps",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "severity-0887",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-reactapps-0887-severity:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8013",
                    "protocol": "tcp",
                    "hostPort": "8013"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@reactapps.local:27017/reactapps_0887?authSource=admin"},{"name":"MONGO_DOMAIN","value":"reactapps.local"},{"name":"CAMUNDAPOD_URL","value":"http://reactapps.local:8080"},{"name":"SECURITYURL","value":"http://reactapps.local:8003"},{"name":"AUTHPROXYURL","value":"http://reactapps.local:8001"},{"name":"ADMINURL","value":"http://reactapps.local:8004"},{"name":"CAMUNDAURL","value":"http://reactapps.local:8002"},{"name":"GCAMURL","value":"http://reactapps.local:8007"},{"name":"APIGATEWAY","value":"http://reactapps.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "reactapps"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/reactapps",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "reactapps",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "reactapps0",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
