//using System.ComponentModel.DataAnnotations;

//namespace SpendSmart.Models
//{
//    public class Expense
//    {
//        public int Id { get; set; }
//        public decimal Value { get; set; }
//        [Required]
//        public String? Description { get; set; }
//    }
//}

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace SpendSmart.Models
{
    public class Expense
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [Required]
        public decimal Value { get; set; }

        //[Required]
        public string? Description { get; set; }
    }
}

