import MyStack from './MyStack';

export default function main(app) {
    // Set default runtime for all functions
    app.setDefaultFunctionProps({
        runtime: 'nodejs12.x',
        timeout: 900,
    });

    new MyStack(app, 'my-stack');

    // Add more stacks
}
