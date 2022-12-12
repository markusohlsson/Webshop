export class Product {
  constructor(
    public title: string,
    public price: string, // måste göra om till number sen
    public description: string,
    public category: string,
    public image: string,
    public id: string
  ) {}
}
