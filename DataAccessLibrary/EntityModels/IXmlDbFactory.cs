using System.Xml.Linq;

namespace DataAccessLibrary.EntityModels
{
    public interface IXmlDbFactory
    {
        XDocument GetXmlDb();
    }
}