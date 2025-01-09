# aws-hola-mundo-test
import json

def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': json.dumps('Hola Mundo! + 1')
    }
