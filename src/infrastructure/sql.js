const query = ({ client, sql, params = [] }) => {
    return new Promise((resolve, reject) => {
        client.query(sql, params, (error, results, fields) => {
            if (error) {
                reject(err);
            } else {
                resolve({ results, fields });
            }
        });
    });
}

module.exports.query = query;