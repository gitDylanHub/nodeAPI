import app from './app';

const server = app.listen(app.get('port'), () => {
    console.info(`*** Loading Database... ***`);
    console.info(`*** Server running at http://localhost:${app.get('port')} ***`);
    console.info(`*** Running in ${app.get('env')} mode. ***`);
});

export default server;