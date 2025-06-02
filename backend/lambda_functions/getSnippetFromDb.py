import json 
import boto3
from decimal import Decimal

client = boto3.client('dynamodb')
dynamodb = boto3.resource("dynamodb")
tableName = 'b-a-p-1612-gitlab'
table = dynamodb.Table(tableName)

def lambda_handler(event, context):
    # TODO implement
    print(event['routeKey'])
    body = {}
    statusCode = 200
    try:
        if event['routeKey'] == "GET /examplefetch":
            res = table.get_item(
                Key = {
                    "stage":"install",
                    "optionals":"cache"
                }
            )
            print(res)
            body = res
            statusCode = 200
    except KeyError:
        statusCode = 400
        body = 'Unsupported route: ' + event['routeKey']
    body = json.dumps(body)
    return {
        'statusCode': statusCode,
        "headers": {
            "Content-Type": "application/json"
        },
        'body': body
    }