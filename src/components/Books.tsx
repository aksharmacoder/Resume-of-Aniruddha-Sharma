import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const books = [
  {
    title: "My Prompt Database for Content Writing",
    description: "A comprehensive guide to leveraging prompts for effective content creation",
    link: "https://www.amazon.in/My-Prompt-Database-Content-Writing-ebook/dp/B0DTV5Y6TL/",
    image: "/placeholder.svg"
  },
  {
    title: "Protecting Your Imagination: Navigating Copyright",
    description: "Essential guide to understanding and protecting intellectual property rights",
    link: "https://www.amazon.in/Protecting-Your-Imagination-Navigating-Copyright-ebook/dp/B0CPPN244Q/",
    image: "/placeholder.svg"
  }
];

export const Books = () => {
  return (
    <section className="py-16 bg-gray-50" id="books">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-navy">Published Works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {books.map((book) => (
            <Card key={book.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{book.title}</CardTitle>
                <CardDescription>{book.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-electricBlue text-white px-4 py-2 rounded hover:bg-navy transition-colors"
                >
                  View on Amazon
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};