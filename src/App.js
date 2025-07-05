import React, { useState } from 'react';
import { Car, MapPin, Star, Phone, Mail, Clock, Users, Award, Shield, Zap, Heart } from 'lucide-react';
import './App.css';

function App() {
  // Luxury car data
  const cars = [
    {
      name: 'Mercedes-Benz S-Class',
      type: 'Luxury Sedan',
      price: '₹15,000/day',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=250&fit=crop',
    },
    {
      name: 'BMW 7 Series',
      type: 'Luxury Sedan',
      price: '₹12,000/day',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=250&fit=crop',
    },
    {
      name: 'Mahindra Scorpio',
      type: 'SUV',
      price: '₹9,000/day',
      image: 'https://img.gaadicdn.com/images/carexteriorimages/930x620/Mahindra/Scorpio-N/9174/1656388358334/front-left-side-47.jpg',
    },
    {
      name: 'Mahindra Thar',
      type: 'Off-Road',
      price: '₹7,500/day',
      image: 'https://tse1.mm.bing.net/th/id/OIP.278ATmd8OWzrowqxdaYYDQHaD5?pid=Api',
    },
    {
      name: 'Toyota Fortuner',
      type: 'SUV',
      price: '₹8,500/day',
      image: 'https://images.prod.seva.id/Toyota/New%20Fortuner/main_color/main_banner_toyota_new_fortuner_Attitude_Black.png',
    },
    {
      name: 'Toyota Innova',
      type: 'MPV',
      price: '₹6,500/day',
      image: 'https://tse1.mm.bing.net/th/id/OIP.0v63CoJ9oemN_iHDBnMe9wHaEK?pid=Api&P=0&h=180',
    },
    {
      name: 'Audi A8',
      type: 'Luxury Sedan',
      price: '₹13,500/day',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=250&fit=crop',
    },
    {
      name: 'Range Rover',
      type: 'Luxury SUV',
      price: '₹18,000/day',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=250&fit=crop',
    },
  ];

  // Services data
  const services = [
    { name: 'Wedding Events', icon: '💒', desc: 'Luxury cars for your special day' },
    { name: 'Corporate Events', icon: '🏢', desc: 'Professional transportation solutions' },
    { name: 'Airport Transfer', icon: '✈️', desc: 'Premium airport pickup & drop' },
    { name: 'City Tours', icon: '🏙️', desc: 'Explore the city in style' },
    { name: 'Party Events', icon: '🎉', desc: 'Make your party memorable' },
    { name: 'Business Travel', icon: '💼', desc: 'Executive travel services' },
  ];

  // Testimonials data
  const testimonials = [
    { name: 'Rahul Sharma', role: 'Wedding Client', text: 'YouOwn made our wedding day perfect with their luxury Mercedes. Highly recommended!', rating: 5 },
    { name: 'Priya Patel', role: 'Corporate Client', text: 'Professional service and top-notch vehicles. Our business meetings were a success.', rating: 5 },
    { name: 'Amit Kumar', role: 'Tour Client', text: 'Amazing experience with the Range Rover. Best luxury car rental service in the city.', rating: 5 },
  ];

  // Features data
  const features = [
    { title: 'Premium Fleet', desc: 'Only the finest luxury vehicles', icon: '🚗' },
    { title: 'Professional Drivers', desc: 'Experienced and courteous chauffeurs', icon: '👨‍💼' },
    { title: '24/7 Support', desc: 'Round the clock customer assistance', icon: '📞' },
    { title: 'Flexible Booking', desc: 'Easy online booking system', icon: '📱' },
    { title: 'Insurance Coverage', desc: 'Fully insured for your peace of mind', icon: '🛡️' },
    { title: 'Competitive Rates', desc: 'Best prices for luxury car rentals', icon: '💰' },
  ];

  return (
    <div style={{fontFamily: 'Poppins, Montserrat, Arial, sans-serif', background: '#10131a', color: '#fff'}}>
      {/* Sticky Header */}
      <header style={{
        background: 'rgba(24,28,36,0.95)', 
        backdropFilter: 'blur(10px)',
        padding: '16px 0', 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000,
        boxShadow: '0 2px 20px rgba(0,0,0,0.3)',
        borderBottom: '1px solid rgba(255,215,0,0.2)'
      }}>
        <div style={{maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px'}}>
          {/* Logo */}
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{fontSize: '2rem', color: '#FFD700'}}>🚗</div>
            <div>
              <div style={{fontWeight: 800, fontSize: '1.8rem', color: '#FFD700', letterSpacing: 1}}>YouOwn</div>
              <div style={{fontSize: '0.9rem', color: '#fff', opacity: 0.8}}>Luxury Car Rentals</div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav style={{display: 'flex', gap: 32, alignItems: 'center'}}>
            <a href="#home" style={{color: '#FFD700', textDecoration: 'none', fontWeight: 600, fontSize: '1rem'}}>Home</a>
            <a href="#about" style={{color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', opacity: 0.8}}>About</a>
            <a href="#services" style={{color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', opacity: 0.8}}>Services</a>
            <a href="#fleet" style={{color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', opacity: 0.8}}>Fleet</a>
            <a href="#contact" style={{color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', opacity: 0.8}}>Contact</a>
            <button style={{
              background: 'linear-gradient(90deg,#FFD700,#fffbe6)', 
              color: '#181c24', 
              fontWeight: 700, 
              fontSize: '0.95rem', 
              border: 'none', 
              borderRadius: 20, 
              padding: '10px 24px', 
              cursor: 'pointer',
              boxShadow: '0 2px 12px rgba(255,215,0,0.3)'
            }}>Book Now</button>
          </nav>
        </div>
      </header>

      {/* Enhanced Banner */}
      <section id="home" style={{
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        background: 'linear-gradient(135deg, rgba(16,19,26,0.8) 0%, rgba(24,28,36,0.9) 100%), url(https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&h=800&fit=crop) center/cover no-repeat',
        overflow: 'hidden'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'rgba(255,215,0,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '30%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'rgba(255,215,0,0.05)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
        
        <div style={{position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 800, padding: '0 20px'}}>
          <div style={{
            background: 'rgba(255,215,0,0.1)',
            padding: '8px 24px',
            borderRadius: 20,
            display: 'inline-block',
            marginBottom: 20,
            border: '1px solid rgba(255,215,0,0.3)'
          }}>
            <span style={{color: '#FFD700', fontSize: '0.9rem', fontWeight: 600}}>Premium Luxury Car Rentals</span>
          </div>
          <h1 style={{
            fontSize: '3.5rem', 
            fontWeight: 800, 
            color: '#FFD700', 
            marginBottom: 20, 
            letterSpacing: 2, 
            textShadow: '0 4px 24px rgba(0,0,0,0.5)',
            lineHeight: 1.2
          }}>Arrive in Style</h1>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: 600,
            color: '#fff',
            marginBottom: 24,
            textShadow: '0 2px 12px rgba(0,0,0,0.5)'
          }}>Book Your Dream Car</h2>
          <p style={{
            fontSize: '1.3rem', 
            color: '#fff', 
            fontWeight: 400, 
            marginBottom: 40, 
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
            lineHeight: 1.6,
            opacity: 0.9
          }}>Experience the ultimate luxury with our premium fleet of vehicles. Perfect for weddings, corporate events, tours, and special occasions.</p>
          <div style={{display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap'}}>
            <button style={{
              background: 'linear-gradient(90deg,#FFD700,#fffbe6)', 
              color: '#181c24', 
              fontWeight: 700, 
              fontSize: '1.1rem', 
              border: 'none', 
              borderRadius: 30, 
              padding: '16px 40px', 
              boxShadow: '0 8px 32px rgba(255,215,0,0.4)', 
              cursor: 'pointer', 
              transition: 'all 0.3s',
              transform: 'scale(1)'
            }}>Book Now</button>
            <button style={{
              background: 'transparent', 
              color: '#FFD700', 
              fontWeight: 600, 
              fontSize: '1.1rem', 
              border: '2px solid #FFD700', 
              borderRadius: 30, 
              padding: '14px 38px', 
              cursor: 'pointer', 
              transition: 'all 0.3s'
            }}>View Fleet</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{background: '#181c24', padding: '60px 0', textAlign: 'center'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, maxWidth: 1200, margin: '0 auto', padding: '0 20px'}}>
          <div>
            <div style={{fontSize: '3rem', fontWeight: 800, color: '#FFD700', marginBottom: 12}}>500+</div>
            <div style={{fontSize: '1.1rem', color: '#fff', opacity: 0.8}}>Happy Clients</div>
          </div>
          <div>
            <div style={{fontSize: '3rem', fontWeight: 800, color: '#FFD700', marginBottom: 12}}>50+</div>
            <div style={{fontSize: '1.1rem', color: '#fff', opacity: 0.8}}>Luxury Cars</div>
          </div>
          <div>
            <div style={{fontSize: '3rem', fontWeight: 800, color: '#FFD700', marginBottom: 12}}>1000+</div>
            <div style={{fontSize: '1.1rem', color: '#fff', opacity: 0.8}}>Successful Trips</div>
          </div>
          <div>
            <div style={{fontSize: '3rem', fontWeight: 800, color: '#FFD700', marginBottom: 12}}>24/7</div>
            <div style={{fontSize: '1.1rem', color: '#fff', opacity: 0.8}}>Customer Support</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{padding: '80px 0', background: '#10131a'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px'}}>
          <h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#FFD700', fontWeight: 700, marginBottom: 20, letterSpacing: 1}}>Why Choose YouOwn?</h2>
          <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#fff', opacity: 0.8, marginBottom: 60, maxWidth: 600, margin: '0 auto 60px auto'}}>
            We provide the best luxury car rental experience with premium vehicles and exceptional service.
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32}}>
            {features.map((feature, idx) => (
              <div key={idx} style={{
                background: '#181c24', 
                padding: 40, 
                borderRadius: 20, 
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                border: '1px solid rgba(255,215,0,0.1)'
              }}
                onMouseOver={e => {
                  e.currentTarget.style.transform='translateY(-10px)';
                  e.currentTarget.style.boxShadow='0 20px 40px rgba(255,215,0,0.2)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform='';
                  e.currentTarget.style.boxShadow='';
                }}>
                <div style={{fontSize: '4rem', marginBottom: 20}}>{feature.icon}</div>
                <h3 style={{fontSize: '1.4rem', color: '#FFD700', marginBottom: 12, fontWeight: 600}}>{feature.title}</h3>
                <p style={{color: '#fff', opacity: 0.8, lineHeight: 1.6}}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{padding: '80px 0', background: '#181c24'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.5rem', color: '#FFD700', fontWeight: 700, marginBottom: 20, letterSpacing: 1}}>About YouOwn</h2>
          <p style={{fontSize: '1.3rem', color: '#fff', opacity: 0.9, maxWidth: 800, margin: '0 auto 50px auto', lineHeight: 1.7}}>
            YouOwn is the premier luxury car rental service, offering the finest collection of premium vehicles for all your special occasions. 
            From elegant weddings to corporate events, we ensure you travel in style and comfort with our professional service.
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, marginTop: 50}}>
            <div style={{background: '#10131a', padding: 40, borderRadius: 20, textAlign: 'center', border: '1px solid rgba(255,215,0,0.1)'}}>
              <div style={{fontSize: '4rem', marginBottom: 20}}>🏆</div>
              <h3 style={{fontSize: '1.4rem', color: '#FFD700', marginBottom: 16, fontWeight: 600}}>Premium Quality</h3>
              <p style={{color: '#fff', opacity: 0.8, lineHeight: 1.6}}>Only the finest luxury vehicles in our fleet, maintained to the highest standards</p>
            </div>
            <div style={{background: '#10131a', padding: 40, borderRadius: 20, textAlign: 'center', border: '1px solid rgba(255,215,0,0.1)'}}>
              <div style={{fontSize: '4rem', marginBottom: 20}}>🛡️</div>
              <h3 style={{fontSize: '1.4rem', color: '#FFD700', marginBottom: 16, fontWeight: 600}}>Safe & Secure</h3>
              <p style={{color: '#fff', opacity: 0.8, lineHeight: 1.6}}>Fully insured vehicles with professional, experienced drivers</p>
            </div>
            <div style={{background: '#10131a', padding: 40, borderRadius: 20, textAlign: 'center', border: '1px solid rgba(255,215,0,0.1)'}}>
              <div style={{fontSize: '4rem', marginBottom: 20}}>⭐</div>
              <h3 style={{fontSize: '1.4rem', color: '#FFD700', marginBottom: 16, fontWeight: 600}}>5-Star Service</h3>
              <p style={{color: '#fff', opacity: 0.8, lineHeight: 1.6}}>Exceptional customer service and attention to detail guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{padding: '80px 0', background: '#10131a'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px'}}>
          <h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#FFD700', fontWeight: 700, marginBottom: 20, letterSpacing: 1}}>Our Services</h2>
          <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#fff', opacity: 0.8, marginBottom: 60, maxWidth: 600, margin: '0 auto 60px auto'}}>
            We offer comprehensive luxury car rental services for all your special occasions and business needs.
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32}}>
            {services.map((service, idx) => (
              <div key={idx} style={{
                background: '#181c24', 
                padding: 40, 
                borderRadius: 20, 
                textAlign: 'center', 
                transition: 'transform 0.3s, box-shadow 0.3s', 
                cursor: 'pointer',
                border: '1px solid rgba(255,215,0,0.1)'
              }}
                onMouseOver={e => {
                  e.currentTarget.style.transform='translateY(-10px)';
                  e.currentTarget.style.boxShadow='0 20px 40px rgba(255,215,0,0.2)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform='';
                  e.currentTarget.style.boxShadow='';
                }}>
                <div style={{fontSize: '4rem', marginBottom: 20}}>{service.icon}</div>
                <h3 style={{fontSize: '1.4rem', color: '#FFD700', marginBottom: 16, fontWeight: 600}}>{service.name}</h3>
                <p style={{color: '#fff', opacity: 0.8, lineHeight: 1.6}}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <main id="fleet" style={{padding: '80px 0', background: '#181c24'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px'}}>
          <h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#FFD700', fontWeight: 700, marginBottom: 20, letterSpacing: 1}}>Our Luxury Fleet</h2>
          <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#fff', opacity: 0.8, marginBottom: 60, maxWidth: 600, margin: '0 auto 60px auto'}}>
            Choose from our premium collection of luxury vehicles for any occasion.
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40}}>
            {cars.map((car, idx) => (
              <div key={idx} style={{
                background: '#10131a', 
                borderRadius: 20, 
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)', 
                padding: 30, 
                textAlign: 'center', 
                position: 'relative', 
                overflow: 'hidden', 
                transition: 'transform 0.3s, box-shadow 0.3s', 
                cursor: 'pointer',
                border: '1px solid rgba(255,215,0,0.1)'
              }}
                onMouseOver={e => {
                  e.currentTarget.style.transform='translateY(-12px) scale(1.02)';
                  e.currentTarget.style.boxShadow='0 20px 50px rgba(255,215,0,0.3)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform='';
                  e.currentTarget.style.boxShadow='0 8px 32px rgba(0,0,0,0.3)';
                }}>
                <img src={car.image} alt={car.name} style={{
                  width: '100%', 
                  height: 180, 
                  objectFit: 'cover', 
                  borderRadius: 16, 
                  marginBottom: 24, 
                  boxShadow: '0 4px 20px rgba(255,215,0,0.2)', 
                  transition: 'transform 0.4s'
                }} />
                <div style={{fontWeight: 700, fontSize: '1.3rem', color: '#FFD700', marginBottom: 8}}>{car.name}</div>
                <div style={{fontSize: '1.1rem', color: '#fff', opacity: 0.85, marginBottom: 12}}>{car.type}</div>
                <div style={{color: '#FFD700', fontWeight: 600, fontSize: '1.2rem', marginBottom: 20}}>{car.price}</div>
                <button style={{
                  background: 'linear-gradient(90deg,#FFD700,#fffbe6)', 
                  color: '#181c24', 
                  fontWeight: 700, 
                  border: 'none', 
                  borderRadius: 12, 
                  padding: '12px 28px', 
                  fontSize: '1.1rem', 
                  cursor: 'pointer', 
                  boxShadow: '0 4px 16px rgba(255,215,0,0.3)', 
                  transition: 'all 0.2s'
                }}>Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Testimonials Section */}
      <section style={{padding: '80px 0', background: '#10131a'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px'}}>
          <h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#FFD700', fontWeight: 700, marginBottom: 20, letterSpacing: 1}}>What Our Clients Say</h2>
          <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#fff', opacity: 0.8, marginBottom: 60, maxWidth: 600, margin: '0 auto 60px auto'}}>
            Don't just take our word for it. Here's what our satisfied clients have to say.
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 40}}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} style={{
                background: '#181c24', 
                padding: 40, 
                borderRadius: 20, 
                textAlign: 'center',
                border: '1px solid rgba(255,215,0,0.1)'
              }}>
                <div style={{fontSize: '2rem', color: '#FFD700', marginBottom: 20}}>{'⭐'.repeat(testimonial.rating)}</div>
                <p style={{color: '#fff', opacity: 0.9, fontSize: '1.2rem', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic'}}>"{testimonial.text}"</p>
                <div style={{fontWeight: 600, color: '#FFD700', fontSize: '1.2rem', marginBottom: 4}}>{testimonial.name}</div>
                <div style={{color: '#fff', opacity: 0.7, fontSize: '1rem'}}>{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{padding: '80px 0', background: '#181c24'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.5rem', color: '#FFD700', fontWeight: 700, marginBottom: 20, letterSpacing: 1}}>Contact Us</h2>
          <p style={{fontSize: '1.3rem', color: '#fff', opacity: 0.9, marginBottom: 60, maxWidth: 600, margin: '0 auto 60px auto'}}>Ready to book your luxury car? Get in touch with us today!</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, marginBottom: 50}}>
            <div style={{background: '#10131a', padding: 32, borderRadius: 16, border: '1px solid rgba(255,215,0,0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: 16}}>📞</div>
              <h3 style={{color: '#FFD700', marginBottom: 12, fontSize: '1.3rem'}}>Call Us</h3>
              <p style={{color: '#fff', opacity: 0.8, fontSize: '1.1rem'}}>+91 98765 43210</p>
            </div>
            <div style={{background: '#10131a', padding: 32, borderRadius: 16, border: '1px solid rgba(255,215,0,0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: 16}}>📧</div>
              <h3 style={{color: '#FFD700', marginBottom: 12, fontSize: '1.3rem'}}>Email Us</h3>
              <p style={{color: '#fff', opacity: 0.8, fontSize: '1.1rem'}}>info@youown.com</p>
            </div>
            <div style={{background: '#10131a', padding: 32, borderRadius: 16, border: '1px solid rgba(255,215,0,0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: 16}}>📍</div>
              <h3 style={{color: '#FFD700', marginBottom: 12, fontSize: '1.3rem'}}>Visit Us</h3>
              <p style={{color: '#fff', opacity: 0.8, fontSize: '1.1rem'}}>Mumbai, Maharashtra</p>
            </div>
          </div>
          <button style={{
            background: 'linear-gradient(90deg,#FFD700,#fffbe6)', 
            color: '#181c24', 
            fontWeight: 700, 
            fontSize: '1.2rem', 
            border: 'none', 
            borderRadius: 30, 
            padding: '16px 40px', 
            boxShadow: '0 8px 32px rgba(255,215,0,0.4)', 
            cursor: 'pointer', 
            transition: 'all 0.3s'
          }}>Get Quote Now</button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{background: '#10131a', color: '#fff', padding: '60px 0 30px 0', borderTop: '1px solid rgba(255,215,0,0.2)'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 50, marginBottom: 50}}>
            <div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20}}>
                <div style={{fontSize: '2rem', color: '#FFD700'}}>🚗</div>
                <div>
                  <div style={{fontWeight: 800, fontSize: '1.8rem', color: '#FFD700', letterSpacing: 1}}>YouOwn</div>
                  <div style={{fontSize: '0.9rem', color: '#fff', opacity: 0.8}}>Luxury Car Rentals</div>
                </div>
              </div>
              <p style={{color: '#fff', opacity: 0.8, lineHeight: 1.7, marginBottom: 24}}>Premium luxury car rental service for all your special occasions. Experience the difference with YouOwn.</p>
              <div style={{display: 'flex', gap: 16}}>
                <div style={{background: '#FFD700', color: '#181c24', width: 45, height: 45, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1.2rem'}}>📘</div>
                <div style={{background: '#FFD700', color: '#181c24', width: 45, height: 45, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1.2rem'}}>📷</div>
                <div style={{background: '#FFD700', color: '#181c24', width: 45, height: 45, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1.2rem'}}>🐦</div>
              </div>
            </div>
            <div>
              <h3 style={{color: '#FFD700', fontSize: '1.3rem', marginBottom: 20, fontWeight: 600}}>Quick Links</h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: 12}}><a href="#home" style={{color: '#fff', opacity: 0.8, textDecoration: 'none', fontSize: '1rem'}}>Home</a></li>
                <li style={{marginBottom: 12}}><a href="#about" style={{color: '#fff', opacity: 0.8, textDecoration: 'none', fontSize: '1rem'}}>About Us</a></li>
                <li style={{marginBottom: 12}}><a href="#services" style={{color: '#fff', opacity: 0.8, textDecoration: 'none', fontSize: '1rem'}}>Services</a></li>
                <li style={{marginBottom: 12}}><a href="#fleet" style={{color: '#fff', opacity: 0.8, textDecoration: 'none', fontSize: '1rem'}}>Our Fleet</a></li>
                <li style={{marginBottom: 12}}><a href="#contact" style={{color: '#fff', opacity: 0.8, textDecoration: 'none', fontSize: '1rem'}}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{color: '#FFD700', fontSize: '1.3rem', marginBottom: 20, fontWeight: 600}}>Services</h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: 12}}><a href="#services" style={{color: '#fff', opacity: 0.8, textDecoration: 'none', fontSize: '1rem'}}>Wedding Events</a></li>
                <li style={{marginBottom: 12}}><a href="#services" style={{color: '#fff', opacity: 0.8, textDecoration: 'none', fontSize: '1rem'}}>Corporate Events</a></li>
                <li style={{marginBottom: 12}}><a href="#services" style={{color: '#fff', opacity: 0.8, textDecoration: 'none', fontSize: '1rem'}}>Airport Transfer</a></li>
                <li style={{marginBottom: 12}}><a href="#services" style={{color: '#fff', opacity: 0.8, textDecoration: 'none', fontSize: '1rem'}}>City Tours</a></li>
                <li style={{marginBottom: 12}}><a href="#services" style={{color: '#fff', opacity: 0.8, textDecoration: 'none', fontSize: '1rem'}}>Party Events</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{color: '#FFD700', fontSize: '1.3rem', marginBottom: 20, fontWeight: 600}}>Contact Info</h3>
              <div style={{marginBottom: 16}}>
                <div style={{color: '#fff', opacity: 0.8, fontSize: '1rem'}}>📞 +91 98765 43210</div>
              </div>
              <div style={{marginBottom: 16}}>
                <div style={{color: '#fff', opacity: 0.8, fontSize: '1rem'}}>📧 info@youown.com</div>
              </div>
              <div style={{marginBottom: 16}}>
                <div style={{color: '#fff', opacity: 0.8, fontSize: '1rem'}}>📍 Mumbai, Maharashtra</div>
              </div>
              <div>
                <div style={{color: '#fff', opacity: 0.8, fontSize: '1rem'}}>🕒 24/7 Available</div>
              </div>
            </div>
          </div>
          <div style={{borderTop: '1px solid rgba(255,215,0,0.2)', paddingTop: 30, textAlign: 'center', color: '#FFD700', fontWeight: 600, letterSpacing: 1, fontSize: '1.1rem'}}>
            &copy; {new Date().getFullYear()} YouOwn. All rights reserved. | Luxury Car Rentals
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

export default App;
