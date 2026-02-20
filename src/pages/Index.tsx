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
      <header className="bg-white border-b border-[var(--gray-border)] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-12 py-0 flex items-center justify-between" style={{ height: "64px" }}>
          {/* Logo */}
          <div style={{ fontSize: "36px", lineHeight: "1", color: "var(--teal)", fontWeight: 700 }}>Ф</div>

          {/* Nav icons */}
          <nav className="flex items-center gap-1">
            {[
              { icon: "List", label: "Темы" },
              { icon: "BookOpen", label: "Теория" },
              { icon: "GraduationCap", label: "Уроки" },
              { icon: "MessageSquare", label: "Чат с ИИ" },
              { icon: "User", label: "Аккаунт" },
            ].map(({ icon, label }) => (
              <button
                key={label}
                title={label}
                className="flex flex-col items-center justify-center gap-1 px-4 py-2 rounded transition-all duration-200 group"
                style={{ background: "transparent", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gray-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <Icon name={icon} size={20} color="var(--teal)" />
                <span style={{ fontSize: "10px", color: "#555", fontWeight: 500 }}>{label}</span>
              </button>
            ))}
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

      {/* CLUSTER: О НАС + ТЕМА НЕДЕЛИ */}
      <section className="max-w-6xl mx-auto px-12 py-14 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* О нас */}
          <div
            className="p-8 rounded"
            style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded" style={{ background: "var(--teal)" }}>
                <Icon name="Info" size={20} color="#fff" />
              </div>
              <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#000" }}>О нас</h2>
            </div>
            <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#555" }}>
              Мы — команда профессионалов в области IT, безопасности и аналитики. Более 10 лет помогаем бизнесу
              трансформироваться цифровым способом: от разработки ПО до внедрения облачных решений. Наш принцип —
              эффективность без лишней сложности.
            </p>
            <button
              className="mt-5 text-sm font-medium"
              style={{
                color: "var(--teal)",
                background: "transparent",
                border: "1px solid var(--teal)",
                borderRadius: "4px",
                padding: "6px 16px",
                cursor: "pointer",
              }}
            >
              Подробнее →
            </button>
          </div>

          {/* Тема недели */}
          <div
            className="p-8 rounded relative overflow-hidden"
            style={{ background: "var(--teal)", border: "1px solid var(--teal)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded" style={{ background: "rgba(255,255,255,0.2)" }}>
                <Icon name="Flame" size={20} color="#fff" />
              </div>
              <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#fff" }}>Тема недели</h2>
            </div>
            <p style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.75)", marginBottom: "8px" }}>
              20 февраля 2026
            </p>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "12px", lineHeight: "1.3" }}>
              Искусственный интеллект в корпоративной безопасности
            </h3>
            <p style={{ fontSize: "14px", lineHeight: "1.7", color: "rgba(255,255,255,0.85)" }}>
              Как современные AI-модели помогают обнаруживать угрозы раньше, чем они становятся проблемой.
            </p>
            <button
              className="mt-5 text-sm font-medium"
              style={{
                color: "var(--teal)",
                background: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "6px 16px",
                cursor: "pointer",
              }}
            >
              Читать →
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <main className="flex-1 max-w-6xl mx-auto px-12 py-16 w-full" style={{ paddingTop: "0" }}>
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