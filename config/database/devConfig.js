module.exports = {
    mongoURL: 'mongodb://vj93:hasgrid2@ds113853.mlab.com:13853/myhasdb',
    // port: 8000,
    port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'
};
