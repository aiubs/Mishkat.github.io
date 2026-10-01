import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Camera, Check, ChevronDown, Headphones, Heart, Laptop, Menu, Monitor, PackageCheck, Printer, Search, ShieldCheck, ShoppingBag, Sparkles, Star, Truck, Wifi, X, Zap } from 'lucide-react'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/')({ component: Storefront })

const products = [
  { id: 1, name: 'Lenovo LOQ 15IRX9 Gaming', category: 'لابتوبات', price: '1,245,000', old: '1,320,000', rating: 4.9, reviews: 31, badge: 'الأكثر طلباً', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=85' },
  { id: 2, name: 'Canon EOS R50 Creator Kit', category: 'كاميرات', price: '895,000', old: '', rating: 4.8, reviews: 19, badge: 'وصل حديثاً', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=85' },
  { id: 3, name: 'ASUS ROG Strix G16', category: 'لابتوبات', price: '1,980,000', old: '2,120,000', rating: 5, reviews: 12, badge: 'خصم مميز', image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85' },
  { id: 4, name: 'Samsung Odyssey G5 32”', category: 'شاشات', price: '485,000', old: '', rating: 4.7, reviews: 26, badge: '', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=85' },
  { id: 5, name: 'Canon imageCLASS MF657Cdw', category: 'طابعات', price: 'اتصل للسعر', old: '', rating: 4.6, reviews: 8, badge: 'ضمان سنة', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=85' },
  { id: 6, name: 'Logitech G Pro X Superlight', category: 'إكسسوارات', price: '168,000', old: '185,000', rating: 4.9, reviews: 42, badge: 'عرض محدود', image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=85' },
]

const categories = [
  { name: 'لابتوبات', meta: 'أكثر من 120 جهاز', icon: Laptop, className: 'laptops' },
  { name: 'كاميرات', meta: 'صناعة اللقطة تبدأ هنا', icon: Camera, className: 'cameras' },
  { name: 'طابعات', meta: 'للبيت والمكتب', icon: Printer, className: 'printers' },
  { name: 'شاشات', meta: 'ألوان أدق، لعب أسرع', icon: Monitor, className: 'monitors' },
]

function Storefront() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('الكل')
  const [cartCount, setCartCount] = useState(3)
  const [added, setAdded] = useState<number | null>(null)
  const visibleProducts = useMemo(() => products.filter((product) => (activeCategory === 'الكل' || product.category === activeCategory) && (product.name.toLowerCase().includes(query.trim().toLowerCase()) || product.category.includes(query.trim()))), [activeCategory, query])
  const addToCart = (id: number) => { setCartCount((count) => count + 1); setAdded(id); window.setTimeout(() => setAdded(null), 1300) }
  const selectCategory = (name: string) => { setActiveCategory(name); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }) }

  return <main dir="rtl">
    <div className="utility-bar"><div className="shell utility-inner"><p><Truck size={15} /> توصيل سريع وآمن إلى جميع محافظات العراق</p><div className="utility-links"><span>السبت — الخميس، 9 صباحاً — 8 مساءً</span><a href="tel:+9647800000000">0780 000 0000</a></div></div></div>
    <header className="site-header">
      <div className="shell nav-main"><a className="brand" href="#top" aria-label="المشكاة ستور، الصفحة الرئيسية"><span className="brand-mark"><Zap size={25} fill="currentColor" /></span><span><strong>المشكاة</strong><small>ALMISHKAT STORE</small></span></a>
        <form className="search-box" onSubmit={(event) => event.preventDefault()} role="search"><Search size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث عن لابتوب، كاميرا، طابعة..." aria-label="ابحث في المنتجات" />{query && <button type="button" aria-label="مسح البحث" onClick={() => setQuery('')}><X size={16} /></button>}</form>
        <div className="nav-actions"><button className="icon-button desktop-only" aria-label="المفضلة"><Heart size={21} /></button><button className="cart-button" onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}><ShoppingBag size={20} /><span>السلة</span><b>{cartCount}</b></button><button className="icon-button menu-button" aria-label="القائمة" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
      </div>
      <nav className={`category-nav ${menuOpen ? 'open' : ''}`} aria-label="أقسام المتجر"><div className="shell nav-links">{['كل الأقسام', 'لابتوبات', 'كاميرات', 'طابعات وأحبار', 'شاشات', 'شبكات وإنترنت', 'تجميعات الألعاب'].map((item) => <a key={item} href="#products" onClick={() => setMenuOpen(false)}>{item}</a>)}<a className="sale-link" href="#products"><Sparkles size={15} /> عروض الأسبوع</a></div></nav>
    </header>

    <section className="hero shell" id="top"><div className="hero-copy"><div className="eyebrow"><span /> التقنية الأقرب إليك منذ 2010</div><h1>اختيارات أذكى.<br /><em>تقنية تدوم.</em></h1><p>أجهزة أصلية مختارة بعناية للعمل، الدراسة واللعب — بضمان حقيقي، سعر عراقي واضح، ودعم يعرف التقنية فعلاً.</p><div className="hero-actions"><a className="primary-cta" href="#products">تسوّق أحدث الأجهزة <ArrowLeft size={19} /></a><a className="text-cta" href="#categories">استكشف الأقسام <ChevronDown size={17} /></a></div><div className="hero-proof"><div><strong>+14</strong><span>سنة خبرة</span></div><div><strong>48h</strong><span>توصيل بغداد</span></div><div><strong>100%</strong><span>أصلي ومكفول</span></div></div></div>
      <div className="hero-visual"><div className="hero-shape" /><img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=90" alt="لابتوب حديث على مكتب أنيق" /><div className="floating-card rating-card"><span>4.9</span><div><div className="stars">{[1,2,3,4,5].map(i=><Star key={i} size={13} fill="currentColor" />)}</div><small>تقييم عملائنا</small></div></div><div className="floating-card stock-card"><span className="pulse" /><div><strong>متوفر الآن</strong><small>شحن فوري من بغداد</small></div></div></div>
    </section>

    <section className="trust-strip"><div className="shell trust-grid"><div><ShieldCheck /><span><strong>ضمان حقيقي معتمد</strong><small>كفالة على الأجهزة والقطع</small></span></div><div><Truck /><span><strong>توصيل لكل العراق</strong><small>تغليف آمن وتتبع مستمر</small></span></div><div><PackageCheck /><span><strong>الدفع عند الاستلام</strong><small>افحص طلبك قبل الدفع</small></span></div><div><Headphones /><span><strong>دعم فني مختص</strong><small>قبل الشراء وبعده</small></span></div></div></section>

    <section className="section shell" id="categories"><div className="section-heading"><div><span>اختصر الطريق</span><h2>تسوّق حسب احتياجك</h2></div><p>كل قسم مرتب ليساعدك توصل للاختيار الصحيح بسرعة.</p></div><div className="category-grid">{categories.map(({ name, meta, icon: CategoryIcon, className }) => <button key={name} className={`category-card ${className}`} onClick={() => selectCategory(name)}><CategoryIcon /><span><small>{meta}</small><strong>{name}</strong><b>تصفّح الآن <ArrowLeft size={15} /></b></span></button>)}</div></section>

    <section className="section products-section" id="products"><div className="shell"><div className="section-heading product-heading"><div><span>مختارة من خبرائنا</span><h2>الأكثر طلباً هذا الأسبوع</h2></div><div className="filters">{['الكل', 'لابتوبات', 'كاميرات', 'شاشات', 'إكسسوارات'].map((filter) => <button key={filter} className={activeCategory === filter ? 'active' : ''} onClick={() => setActiveCategory(filter)}>{filter}</button>)}</div></div>
      {visibleProducts.length ? <div className="product-grid">{visibleProducts.map((product) => <article className="product-card" key={product.id}><div className="product-image"><img src={product.image} alt={product.name} loading="lazy" />{product.badge && <span>{product.badge}</span>}<button aria-label={`إضافة ${product.name} إلى المفضلة`}><Heart size={18} /></button></div><div className="product-info"><small>{product.category}</small><h3>{product.name}</h3><div className="product-rating"><Star size={14} fill="currentColor" /><strong>{product.rating}</strong><span>({product.reviews} تقييماً)</span></div><div className="product-buy"><div>{product.old && <del>{product.old} د.ع</del>}<strong>{product.price}{product.price !== 'اتصل للسعر' && ' د.ع'}</strong></div><button className={added === product.id ? 'added' : ''} onClick={() => addToCart(product.id)} aria-label="أضف إلى السلة">{added === product.id ? <Check size={19} /> : <ShoppingBag size={19} />}</button></div></div></article>)}</div> : <div className="empty-state"><Search size={32} /><h3>لم نجد منتجاً بهذا الاسم</h3><p>جرّب كلمة أقصر أو تصفّح كل المنتجات.</p><button onClick={() => { setQuery(''); setActiveCategory('الكل') }}>عرض كل المنتجات</button></div>}
    </div></section>

    <section className="shell promo"><div><span>تجميعتك، على مزاجك</span><h2>جهاز ألعاب مصمم<br />لك أنت.</h2><p>اختر ميزانيتك وألعابك المفضلة، وفريقنا يركّب ويختبر التجميعة قبل وصولها إليك.</p><a href="tel:+9647800000000">تحدث مع خبير التجميع <ArrowLeft size={18} /></a></div><div className="promo-art"><Monitor /><Wifi /><Zap /></div></section>
    <footer><div className="shell footer-grid"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark"><Zap size={25} fill="currentColor" /></span><span><strong>المشكاة</strong><small>ALMISHKAT STORE</small></span></a><p>وجهتك الموثوقة للتقنية الأصلية في العراق. نختار، نفحص، ونوصل بعناية.</p></div><div><h3>المتجر</h3><a href="#categories">الأقسام</a><a href="#products">وصل حديثاً</a><a href="#products">العروض</a></div><div><h3>خدمة العملاء</h3><a href="tel:+9647800000000">اتصل بنا</a><a href="#">سياسة الاستبدال</a><a href="#">الضمان والصيانة</a></div><div><h3>معرض بغداد</h3><p>شارع الصناعة، مجمع التقنية<br />السبت — الخميس<br />9:00 ص — 8:00 م</p></div></div><div className="shell footer-bottom"><span>© 2026 المشكاة ستور. جميع الحقوق محفوظة.</span><span>الدفع عند الاستلام متاح في جميع المحافظات</span></div></footer>
  </main>
}
