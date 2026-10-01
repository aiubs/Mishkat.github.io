export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Lenovo LOQ 15IRX9 Gaming',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1200&q=85',
    description:
      'لابتوب ألعاب قوي بمعالج حديث، شاشة سريعة ونظام تبريد متقدم للعمل واللعب لساعات طويلة.',
    shortDescription: 'قوة ثابتة للألعاب، التصميم والعمل الاحترافي.',
    price: 1245000,
  },
]

export default products
