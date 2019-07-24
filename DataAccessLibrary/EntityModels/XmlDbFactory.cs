using System.Xml.Linq;

namespace DataAccessLibrary.EntityModels
{
    /// <summary>
    /// Factory that returns a db
    /// </summary>
    public class XmlDbFactory : IXmlDbFactory
    {
        public XDocument GetXmlDb()
        {
            return DbParserResolver.DB_PARSER.GetDb();
        }
    }
}