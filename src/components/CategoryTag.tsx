const styles: Record<string, string> = {
  Reinvention: "bg-terracotta text-primary-foreground",
  Money: "bg-gold text-primary-foreground",
  Work: "bg-alpine text-primary-foreground",
  Motherhood: "bg-plum text-primary-foreground",
  Ideas: "bg-pine text-primary-foreground",
};

export function CategoryTag({ category }: { category: string }) {
  return <span className={`cat-tag ${styles[category] ?? "bg-accent text-accent-foreground"}`}>{category}</span>;
}
