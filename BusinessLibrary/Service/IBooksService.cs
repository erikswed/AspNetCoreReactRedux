using System.Threading.Tasks;
using System.Collections.Generic;
using BusinessLibrary.Model;

namespace BusinessLibrary.Service
{
    public interface IBooksService
    {
        List<BooksModel> GetBooks(BooksModel booksModel);
    }
}