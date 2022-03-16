## Deploy lambda 
Using: [AWS Labda deploy - github Actions](https://github.com/marketplace/actions/aws-lambda-deploy)

Check detail [Lambda Action](https://github.com/appleboy/lambda-action)

Policy:
~~~
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "iam:ListRoles",
        "lambda:UpdateFunctionCode",
        "lambda:CreateFunction",
        "lambda:UpdateFunctionConfiguration"
      ],
      "Resource": "arn:aws:lambda:${REGION}:${ACCOUNT}:function:${LAMBDA_NAME}"
    }
  ]
}
~~~

