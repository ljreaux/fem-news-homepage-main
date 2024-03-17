import Article from "./Article";
import retro from "../../assets/images/image-retro-pcs.jpg";
import topLaptop from "../../assets/images/image-top-laptops.jpg";
import gamingGrowth from "../../assets/images/image-gaming-growth.jpg";

export default function BottomArticles() {
  const articles = [
    {
      title: "Reviving Retro PCs",
      content: "What happens when old PCs are given modern upgrades?",
      imgSrc: retro,
    },
    {
      title: "Top 10 Laptops of 2022",
      content: "Our best picks for various needs and budgets.",
      imgSrc: topLaptop,
    },
    {
      title: "The Growth of Gaming",
      content: "How the pandemic has sparked fresh opportunities.",
      imgSrc: gamingGrowth,
    },
  ];
  return (
    <div className="bottom">
      {articles.map((article, idx) => {
        return (
          <Article key={article.title} {...article} number={`0${idx + 1}`} />
        );
      })}
    </div>
  );
}
