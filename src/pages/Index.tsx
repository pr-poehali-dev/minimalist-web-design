import { useState } from "react";
import Icon from "@/components/ui/icon";

const CATEGORIES = ["Все", "IT-решения", "Безопасность", "Аналитика", "Интеграции", "Поддержка"];

const SERVICES = [
  {
    id: 1,
    category: "IT-решения",
    icon: "Monitor",
    title: "Разработка ПО",
    description: "Создание корпоративных приложений под ключ с учётом бизнес-процессов компании.",
  },
  {
    id: 2,
    category: "IT-решения",
    icon: "Cloud",
    title: "Облачные решения",
    description: "Миграция инфраструктуры в облако, настройка и сопровождение облачных сервисов.",
  },
  {
    id: 3,
    category: "Безопасность",
    icon: "Shield",
    title: "Защита данных",
    description: "Аудит безопасности, настройка систем защиты и шифрования корпоративных данных.",
  },
  {
    id: 4,
    category: "Безопасность",
    icon: "Lock",
    title: "Кибербезопасность",
    description: "Комплексная защита от внешних угроз, мониторинг и оперативное реагирование.",
  },
  {
    id: 5,
    category: "Аналитика",
    icon: "BarChart2",
    title: "Бизнес-аналитика",
    description: "Построение дашбордов, отчётность и аналитика данных для управленческих решений.",
  },
  {
    id: 6,
    category: "Аналитика",
    icon: "TrendingUp",
    title: "Прогнозная аналитика",
    description: "Предиктивные модели и машинное обучение для прогнозирования бизнес-показателей.",
  },
  {
    id: 7,
    category: "Интеграции",
    icon: "GitMerge",
    title: "API-интеграции",
    description: "Соединение систем и сервисов компании через современные API-протоколы.",
  },
  {
    id: 8,
    category: "Интеграции",
    icon: "Settings",
    title: "ERP и CRM",
    description: "Внедрение и настройка систем управления ресурсами и взаимоотношениями с клиентами.",
  },
  {
    id: 9,
    category: "Поддержка",
    icon: "Headphones",
    title: "Техническая поддержка",
    description: "Круглосуточная поддержка пользователей и оперативное решение технических вопросов.",
  },
];

const FEATURES = [
  { icon: "Settings", label: "Профессиональные услуги", title: "Комплексные IT-решения" },
  { icon: "Shield", label: "Гарантия качества", title: "Безопасность данных" },
  { icon: "TrendingUp", label: "Оперативный результат", title: "Быстрый запуск проектов" },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered =
    activeCategory === "Все"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: "Roboto, sans-serif" }}>
      {/* HEADER */}
      <header className="bg-white border-b border-[var(--gray-border)]">
        <div className="max-w-6xl mx-auto px-12 py-6 flex items-center justify-between">
          <div className="flex flex-col" style={{ gap: "8px" }}>
            <div
              style={{
                fontSize: "80px",
                lineHeight: "1",
                color: "var(--teal)",
                fontWeight: 700,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Ф
            </div>
            <span style={{ fontSize: "18px", fontWeight: 700, color: "#000", letterSpacing: "0.03em" }}>
              Технологии будущего
            </span>
          </div>

          <nav className="flex gap-8 items-center">
            {["О компании", "Услуги", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontSize: "14px", fontWeight: 500, color: "#000", textDecoration: "none" }}
                className="hover:text-[color:var(--teal)] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <button
              style={{
                background: "var(--teal)",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 500,
                padding: "8px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Связаться
            </button>
          </nav>
        </div>
      </header>

      {/* HERO FEATURES */}
      <section style={{ background: "var(--gray-light)", borderBottom: "1px solid var(--gray-border)" }}>
        <div className="max-w-6xl mx-auto px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {FEATURES.map((f) => (
              <div
                key={f.icon}
                className="flex flex-col items-center text-center p-8 bg-white rounded"
                style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.08)" }}
              >
                <Icon name={f.icon} size={52} color="var(--teal)" />
                <p style={{ marginTop: "16px", fontWeight: 700, color: "#000", fontSize: "15px" }}>{f.title}</p>
                <p style={{ marginTop: "4px", color: "#888", fontSize: "12px" }}>{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <main className="flex-1 max-w-6xl mx-auto px-12 py-16 w-full">
        <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#000", marginBottom: "8px" }}>Наши услуги</h2>
        <div style={{ height: "2px", width: "48px", background: "var(--teal)", marginBottom: "32px" }} />

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontSize: "13px",
                fontWeight: 500,
                padding: "7px 16px",
                borderRadius: "4px",
                border: `1px solid ${activeCategory === cat ? "var(--teal)" : "var(--gray-border)"}`,
                background: activeCategory === cat ? "var(--teal)" : "transparent",
                color: activeCategory === cat ? "#fff" : "#000",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-white border rounded cursor-pointer group"
              style={{
                borderColor: "var(--gray-border)",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded mb-4"
                style={{ background: "var(--gray-light)" }}
              >
                <Icon name={service.icon} size={24} color="var(--teal)" />
              </div>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "11px",
                  fontWeight: 500,
                  padding: "2px 8px",
                  borderRadius: "4px",
                  background: "#e8f9ff",
                  color: "var(--teal)",
                  marginBottom: "8px",
                }}
              >
                {service.category}
              </span>
              <h3 style={{ fontWeight: 700, color: "#000", fontSize: "15px", marginBottom: "8px" }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#555" }}>{service.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ background: "var(--gray-footer)", borderTop: "1px solid var(--gray-border)" }}>
        <div className="max-w-6xl mx-auto px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <p style={{ fontSize: "12px", color: "#555" }}>г. Москва, ул. Профсоюзная, 128</p>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "#000" }}>+7 (495) 000-00-00</p>
            <p style={{ fontSize: "12px", color: "#555" }}>info@company.ru</p>
          </div>

          <div className="hidden md:block" style={{ height: "40px", width: "1px", background: "var(--gray-border)" }} />

          <div className="flex items-center gap-3">
            {[
              { icon: "MessageCircle", label: "VK" },
              { icon: "Send", label: "Telegram" },
              { icon: "Youtube", label: "YouTube" },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                title={label}
                className="flex items-center justify-center rounded border transition-all duration-200"
                style={{
                  width: "36px",
                  height: "36px",
                  borderColor: "var(--gray-border)",
                  color: "var(--teal)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--teal)";
                  e.currentTarget.style.borderColor = "var(--teal)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "var(--gray-border)";
                }}
              >
                <Icon name={icon} size={18} color="var(--teal)" />
              </a>
            ))}
          </div>

          <p style={{ fontSize: "11px", color: "#aaa" }}>© 2026 Компания Ф. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}