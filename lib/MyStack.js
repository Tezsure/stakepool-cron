import * as sst from '@serverless-stack/resources';

export default class MyStack extends sst.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);

        // Create Cron Job
        new sst.Cron(this, 'Cron', {
            schedule: 'rate(3 minutes)',
            job: 'src/lambda.handler',
        });
    }
}
