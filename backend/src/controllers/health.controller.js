const pool = require('../config/database');

const healthCheck = async (req, res, next) => {

    try {

        await pool.query('SELECT NOW()');

        res.status(200).json({
            success: true,
            message: 'MiniBlog API running',
            database: 'connected'
        });

    } catch (error) {

        next(error);

    }

};

module.exports = {
    healthCheck
};