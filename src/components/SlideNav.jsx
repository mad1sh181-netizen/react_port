const dots = ['About', 'Skills', 'Projects', 'Contact'];

export default function SlideNav({ currentSlide, onNavigate }) {
  return (
    <div className="slide-nav" id="slideNav">
      {dots.map((title, i) => (
        <button
          key={i}
          className={`slide-dot${currentSlide === i ? ' active' : ''}`}
          data-slide={i}
          data-title={title}
          onClick={() => onNavigate(i)}
        />
      ))}
    </div>
  );
}
