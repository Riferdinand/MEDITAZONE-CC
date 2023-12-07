const quotesService = require('../services/quotes.service');

const getAllQuotesController = async (req, res) => {
    try {
        const quotes = await quotesService.getAllQuotes();
        
        return res.json({
            data: quotes,
            message: 'Success GET All Quotes.',
        });
    } catch (error) {
        console.error('Error fetching quotes:', error);
        return res.status(500).json({
            message: 'Error fetching quotes.',
        });
    }
};

const getQuoteByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const quote = await quotesService.getQuoteById(id);

        if (!quote) {
            return res.status(404).json({
                message: 'Quote not found.',
            });
        }

        return res.json({
            data: quote,
            message: 'Success GET Quote By ID.',
        });
    } catch (error) {
        console.error('Error fetching quote by ID:', error);
        return res.status(500).json({
            message: 'Error fetching quote by ID.',
        });
    }
};

module.exports = {
    getAllQuotesController,
    getQuoteByIdController,
};