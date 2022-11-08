const { Quote } = require("../models");
const apiLink = "https://api.kanye.rest/";
const axios = require("axios");

class Controller {
  static async apiQuote(req, res, next) {
    try {
      const { data } = await axios.get(apiLink);
      const quotes = await Quote.findAll();

      if (quotes.length >= 1) {
        for (let quote of quotes) {
          if (quote.quote === data.quote) {
            throw { name: "Duplicate quote" };
          }
        }
      }

      const newQuote = await Quote.create({ quote: data.quote });
      res.status(200).json(newQuote);
    } catch (error) {
      next(error);
    }
  }

  static async quotes(req, res, next) {
    try {
      const quotes = await Quote.findAll({where: {favorites: false}, attributes: ['quote', 'favorites']})
      res.status(200).json(quotes)
    } catch (error) {
      next(error)
    }
  }

  static async favorites(req, res, next) {
    try {
      const quotes = await Quote.findAll({where: {favorites: true}, attributes: ['quote', 'favorites']})
      res.status(200).json(quotes)
    } catch (error) {
      next(error)
    }
  }

  static async newQuote(req, res, next) {
    try {
      const {quote} = req.body
      if(!quote) throw {name: "Quote cannot be empty"}

      const quotes = await Quote.findAll();

      if (quotes.length >= 1) {
        for (let quote of quotes) {
          if (quote.quote === quote) {
            throw { name: "Duplicate quote" };
          }
        }
      }
      
      await Quote.create({quote})

      res.status(201).json({message: "New quote added"})
    } catch (error) {
      next(error)
    }
  }

  static async favorite(req, res, next) {
    try {
      const {id} = req.params

      const quote = await Quote.findByPk(id)
      if(!quote) throw {name: "Data not found"}

      await Quote.update({favorites: true}, {where: {id}})

      res.status(200).json({message: "Favorites list updated"})
    } catch (error) {
      next(error)
    }
  }

  static async delete(req, res, next) {
    try {
      const {id} = req.params

      const quote = await Quote.findByPk(id)
      if(!quote) throw {name: "Data not found"}

      await Quote.destroy({where: {id}})

      res.status(200).json({message: "Quote deleted"})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller;
