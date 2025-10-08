import json
import random
from datetime import datetime, timedelta
from enum import Enum
from typing import List, Dict, Union
import uuid

# Данные для генерации
DRIVERS = [
    "Иванов А.С.", "Петров В.И.", "Сидоров Д.К.", "Козлов М.П.", 
    "Николаев С.В.", "Федоров А.А.", "Васильев П.М.", "Смирнов И.Н."
]

LICENSE_PLATES = [
    "А123БВ777", "В456ГД178", "Е789ЖК750", "М321НВ777", 
    "О654ПС197", "Р987СТ750", "У159ФХ777", "Х753ЦЩ197"
]

BANKS = [
    "Сбербанк", "ВТБ", "Альфа-Банк", "Тинькофф", 
    "Газпромбанк", "Открытие", "Райффайзенбанк"
]

NAMES = ["Алексей", "Дмитрий", "Сергей", "Андрей", "Михаил", "Владимир"]
LAST_NAMES = ["Иванов", "Петров", "Сидоров", "Кузнецов", "Попов", "Васильев"]
SURNAMES = ["Александрович", "Дмитриевич", "Сергеевич", "Андреевич", "Михайлович"]
EMAIL_DOMAINS = ["gmail.com", "yandex.ru", "mail.ru", "outlook.com"]

REGIONS = ["Московская область", "Ленинградская область", "Новосибирская область", "Свердловская область", "Республика Татарстан"]
CITIES = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань"]
STREETS = ["Ленина", "Пушкина", "Гагарина", "Советская", "Мира", "Центральная", "Садовоя", "Лесная"]

def generate_address() -> Dict:
    """Генерирует адрес согласно AddressConfig"""
    address = {
        "region": random.choice(REGIONS),
        "city": random.choice(CITIES),
        "street": random.choice(STREETS),
        "house": random.randint(1, 100)
    }
    
    # Добавляем опциональные поля с вероятностью 50%
    if random.random() > 0.5:
        address["country"] = "Россия"
    if random.random() > 0.5:
        address["office"] = random.randint(1, 50)
        
    return address

def generate_personal_config() -> Dict:
    """Генерирует PersonalConfig"""
    name = random.choice(NAMES)
    last_name = random.choice(LAST_NAMES)
    
    return {
        "name": name,
        "lastName": last_name,
        "surname": random.choice(SURNAMES),
        "address": generate_address(),
        "cost": round(random.uniform(1000, 5000), 2),
        "phone": int(f"7{random.randint(9000000000, 9999999999)}"),
        "email": f"{name.lower()}.{last_name.lower()}@{random.choice(EMAIL_DOMAINS)}",
        "messenger": random.choice(["Telegram", "WhatsApp", "Viber", "Signal"])
    }

def generate_personal_partner() -> Dict:
    """Генерирует данные частного заказчика"""
    return {
        "type": "PersonalPartner",
        "name": random.choice(NAMES),
        "lastName": random.choice(LAST_NAMES),
        "surname": random.choice(SURNAMES),
        "tel": f"+7{random.randint(900, 999)}{random.randint(1000000, 9999999)}"
    }

def generate_sole_proprietor() -> Dict:
    """Генерирует данные индивидуального предпринимателя"""
    personal_config = generate_personal_config()
    return {
        "type": "SoleProprietor",
        "personalInfo": personal_config,
        "taxId": f"{random.randint(1000000000, 9999999999)}",
        "ogrnip": f"{random.randint(1000000000000, 9999999999999)}",
        "okpo": f"{random.randint(10000000, 99999999)}",
        "currentAcc": f"{random.randint(10000000000000000000, 99999999999999999999)}",
        "bank": random.choice(BANKS),
        "correspondentAcc": f"{random.randint(10000000000000000000, 99999999999999999999)}"
    }

def generate_organization() -> Dict:
    """Генерирует данные организации"""
    return {
        "type": "Organization",
        "title": f"ООО '{random.choice(['Техно', 'Строй', 'Транс', 'Логист', 'Сервис'])}{random.randint(1, 100)}'",
        "officialAddress": generate_address(),
        "postAddress": generate_address(),
        "taxID": f"{random.randint(1000000000, 9999999999)}",
        "kpp": f"{random.randint(100000000, 999999999)}",
        "currentAcc": f"{random.randint(10000000000000000000, 99999999999999999999)}",
        "bank": random.choice(BANKS),
        "correspondentAcc": f"{random.randint(10000000000000000000, 99999999999999999999)}",
        "bik": f"{random.randint(100000000, 999999999)}",
        "ogrn": f"{random.randint(1000000000000, 9999999999999)}",
        "director": f"{random.choice(LAST_NAMES)} {random.choice(NAMES)} {random.choice(SURNAMES)}",
        "directorInShort": f"{random.choice(LAST_NAMES)[0]}.{random.choice(NAMES)[0]}."
    }

def generate_user_trip(date: str) -> Dict:
    """Генерирует одну поездку"""
    mileage = random.randint(50, 500)
    fuel_consumption = round(mileage * random.uniform(0.08, 0.15), 1)
    fuel_cost = round(fuel_consumption * random.uniform(45, 55), 2)
    revenue = random.randint(1000, 10000)
    other_costs = random.randint(100, 500)
    office_cost = random.randint(200, 800)
    
    prime_cost = fuel_cost + other_costs + office_cost
    margin = revenue - prime_cost
    marginality = round((margin / revenue) * 100, 2) if revenue > 0 else 0
    
    # Создаем базовый объект поездки
    trip = {
        "id": str(uuid.uuid4()),
        "date": date,
        "mileage": mileage,
        "driver": random.choice(DRIVERS),
        "licensePlate": random.choice(LICENSE_PLATES),
        "actualWorkTime": random.randint(2, 12),
        "fuelConsumption": fuel_consumption,
        "fuelCost": fuel_cost,
        "primeCost": round(prime_cost, 2),
        "officeCost": office_cost,
        "otherCost": other_costs,
        "revenue": revenue,
        "margin": round(margin, 2),
        "marginality": marginality
    }
    
    # Добавляем taxCost только с вероятностью 70%
    if random.random() > 0.3:
        trip["taxCost"] = round(random.uniform(50, 300), 2)
    
    # Случайно выбираем тип контрагента
    counterparty_type = random.choice(["PersonalPartner", "SoleProprietor", "Organization"])
    
    if counterparty_type == "PersonalPartner":
        trip["counterparty"] = generate_personal_partner()
    elif counterparty_type == "SoleProprietor":
        trip["counterparty"] = generate_sole_proprietor()
    else:
        trip["counterparty"] = generate_organization()
    
    return trip

def main():
    """Основная функция"""
    print("Генератор данных поездок")
    print("=" * 30)
    
    # Запрос дат у пользователя
    start_date_str = input("Введите начальную дату (ГГГГ-ММ-ДД): ")
    end_date_str = input("Введите конечную дату (ГГГГ-ММ-ДД): ")
    
    # Запрос количества поездок в день
    try:
        trips_per_day = int(input("Введите количество поездок в день: "))
    except ValueError:
        print("Ошибка: введите целое число")
        return
    
    try:
        start_date = datetime.strptime(start_date_str, "%Y-%m-%d")
        end_date = datetime.strptime(end_date_str, "%Y-%m-%d")
        
        if start_date > end_date:
            print("Ошибка: начальная дата не может быть больше конечной")
            return
        
        # Генерация поездок для каждого дня
        user_trips = []
        current_date = start_date
        
        print(f"\nГенерация {trips_per_day} поездок на каждый день:")
        print(f"Период: {start_date_str} - {end_date_str}")
        
        while current_date <= end_date:
            date_str = current_date.strftime("%Y-%m-%d")
            
            # Генерируем указанное количество поездок на каждый день
            for i in range(trips_per_day):
                trip = generate_user_trip(date_str)
                user_trips.append(trip)
            
            print(f"{date_str}: {trips_per_day} поездок")
            current_date += timedelta(days=1)
        
        # Сохранение в JSON файл
        output_filename = f"user_trips_{start_date_str}_to_{end_date_str}.json"
        with open(output_filename, 'w', encoding='utf-8') as f:
            json.dump(user_trips, f, ensure_ascii=False, indent=2)
        
        total_days = (end_date - start_date).days + 1
        total_trips = total_days * trips_per_day
        
        print(f"\nУспешно сгенерировано {total_trips} поездок")
        print(f"За {total_days} дней по {trips_per_day} поездок в день")
        print(f"Данные сохранены в файл: {output_filename}")
        
        # Статистика по типам контрагентов
        counterparty_types = [trip['counterparty']['type'] for trip in user_trips]
        personal_count = counterparty_types.count("PersonalPartner")
        sole_count = counterparty_types.count("SoleProprietor")
        org_count = counterparty_types.count("Organization")
        
        print(f"\nСтатистика по контрагентам:")
        print(f"  PersonalPartner: {personal_count} ({personal_count/total_trips*100:.1f}%)")
        print(f"  SoleProprietor: {sole_count} ({sole_count/total_trips*100:.1f}%)")
        print(f"  Organization: {org_count} ({org_count/total_trips*100:.1f}%)")
        
        # Статистика по taxCost
        trips_with_tax = sum(1 for trip in user_trips if 'taxCost' in trip)
        print(f"Поездок с taxCost: {trips_with_tax} ({trips_with_tax/total_trips*100:.1f}%)")
        
        # Показываем пример данных
        if user_trips:
            print(f"\nПример данных (первая поездка):")
            sample_trip = user_trips[0]
            print(f"Дата: {sample_trip['date']}")
            print(f"Водитель: {sample_trip['driver']}")
            print(f"Пробег: {sample_trip['mileage']} км")
            print(f"Контрагент: {sample_trip['counterparty']['type']}")
            
            if 'taxCost' in sample_trip:
                print(f"Налог: {sample_trip['taxCost']} руб")
            
    except ValueError as e:
        print(f"Ошибка в формате даты: {e}")
    except Exception as e:
        print(f"Произошла ошибка: {e}")

if __name__ == "__main__":
    main()
