using BusinessLibrary.Model;
using DataAccessLibrary.EntityModels;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;
using System.Xml.Linq;
using System.Globalization;

namespace BusinessLibrary.Service
{
    public class BooksService : IBooksService
    {
        public List<BooksModel> GetBooks(BooksModel booksModel)
        {
            BooksDbContext db = new BooksDbContext();
            XDocument doc = db.GetXmlDb();
            var map = new Dictionary<string, BooksModel>();
            List<BooksModel> bList = new List<BooksModel>();
            foreach (XElement x in doc.Descendants("book"))
            {
                if (booksModel.Title != null)
                {
                    if (x.Element("title").Value.ToLower().Contains(booksModel.Title.ToLower()))
                    {
                        if (!map.ContainsKey(x.Attribute("id").Value))
                            map.Add(x.Attribute("id").Value, getBook(x));
                    }
                }
                if (booksModel.Author != null)
                {
                    if (x.Element("author").Value.ToLower().Contains(booksModel.Author.ToLower()))
                    {
                        if (!map.ContainsKey(x.Attribute("id").Value))
                            map.Add(x.Attribute("id").Value, getBook(x));
                    }
                }
                if (booksModel.Genre != null)
                {
                    if (x.Element("genre").Value.ToLower().Contains(booksModel.Genre.ToLower()))
                    {
                        if (!map.ContainsKey(x.Attribute("id").Value))
                            map.Add(x.Attribute("id").Value, getBook(x));
                    }
                }
                if (booksModel.Price != null)
                {
                    if (x.Element("price").Value.ToLower().Contains(booksModel.Price.ToLower()))
                    {
                        if (!map.ContainsKey(x.Attribute("id").Value))
                            map.Add(x.Attribute("id").Value, getBook(x));
                    }
                }
                if (booksModel.Publish_date != null)
                {
                    if (x.Element("publish_date").Value.ToLower().Contains(booksModel.Publish_date.ToLower()))
                    {
                        if (!map.ContainsKey(x.Attribute("id").Value))
                            map.Add(x.Attribute("id").Value, getBook(x));
                    }
                }
                if (booksModel.Description != null)
                {
                    if (x.Element("description").Value.ToLower().Contains(booksModel.Description.ToLower()))
                    {
                        if (!map.ContainsKey(x.Attribute("id").Value))
                            map.Add(x.Attribute("id").Value, getBook(x));
                    }
                }
            }
            return map.Values.ToList();
        }
        private BooksModel getBook(XElement x)
        {
            return new BooksModel
            {
                Id = x.Attribute("id").Value,
                Title = x.Element("title").Value,
                Author = x.Element("author").Value,
                Genre = x.Element("genre").Value,
                Price = x.Element("price").Value,
                Publish_date = x.Element("publish_date").Value,

                // Price = decimal.Parse(x.Element("price").Value.Replace(',', '.'), NumberStyles.Any, CultureInfo.InvariantCulture),
                // Publish_date = Convert.ToDateTime(x.Element("publish_date").Value),
                Description = x.Element("description").Value
            };
        }
    }
}