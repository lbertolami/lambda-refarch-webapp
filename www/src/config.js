// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4ocobfbbosa10m26v3i0dqdp5e",     // CognitoClientID
  "api_base_url": "https://06unyvu0wg.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-tano-stack-formation.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d39fb34qtuhifz.amplifyapp.com"                                      // AmplifyURL
};

export default config;
