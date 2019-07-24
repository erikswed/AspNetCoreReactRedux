using System;
using System.Xml.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DataAccessLibrary.EntityModels
{
    public partial class BooksDbContext : IXmlDbFactory
    {
         public XDocument GetXmlDb()
        {
            return DbParserResolver.DB_PARSER.GetDb();
        }
    }
}
