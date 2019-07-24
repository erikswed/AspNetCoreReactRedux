using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DataAccessLibrary.EntityModels
{
    public interface IDbParser
    {
        XDocument GetDb();
    }
}
