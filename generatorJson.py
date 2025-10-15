import json
import random
from datetime import datetime, timedelta
from typing import Dict
import uuid

# Данные для генерации (остаются без изменений)
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

REGIONS = ["Московская область", "Ленинградская область", "Новосибирская область", "Свердловская область", "Республика Татарстан"]
CITIES = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань"]
STREETS = ["Ленина", "Пушкина", "Гагарина", "Советская", "Мира", "Центральная", "Садовоя", "Лесная"]

def generate_address(prefix: str) -> Dict:
    """Генерирует адрес с префиксом для полей"""
    address = {
        f"{prefix}_region": random.choice(REGIONS),
        f"{prefix}_city": random.choice(CITIES),
        f"{prefix}_street": random.choice(STREETS),
        f"{prefix}_house": random.randint(1, 100)
    }
    
    # Добавляем опциональные поля с вероятностью 50%
    if random.random() > 0.5:
        address[f"{prefix}_country"] = "Россия"
    if random.random() > 0.5:
        address[f"{prefix}_office"] = random.randint(1, 50)
        
    return address

def generate_empty_address(prefix: str) -> Dict:
    """Генерирует пустой адрес с 'Отсутствует'"""
    address = {
        f"{prefix}_region": "Отсутствует",
        f"{prefix}_city": "Отсутствует", 
        f"{prefix}_street": "Отсутствует",
        f"{prefix}_house": 0
    }
    
    # Для пустого адреса тоже добавляем опциональные поля с вероятностью 50%
    if random.random() > 0.5:
        address[f"{prefix}_country"] = "Отсутствует"
    if random.random() > 0.5:
        address[f"{prefix}_office"] = 0
        
    return address

def generate_personal_partner_fields() -> Dict:
    """Генерирует поля для частного заказчика"""
    name = random.choice(NAMES)
    last_name = random.choice(LAST_NAMES)
    surname = random.choice(SURNAMES)
    
    base_fields = {
        "counterpart_type": "PersonalPartner",
        "counterpart_name": name,
        "counterpart_lastName": last_name,
        "counterpart_surname": surname,
        "counterpart_tel": f"+7{random.randint(900, 999)}{random.randint(1000000, 9999999)}",
        "counterpart_title": "Отсутствует",
        "counterpart_taxID": "Отсутствует",
        "counterpart_kpp": "Отсутствует",
        "counterpart_currentAcc": "Отсутствует",
        "counterpart_bank": "Отсутствует",
        "counterpart_correspondentAcc": "Отсутствует",
        "counterpart_bik": "Отсутствует",
        "counterpart_ogrn_ogrnip": "Отсутствует",
        "counterpart_director": "Отсутствует",
        "counterpart_directorInShort": "Отсутствует"
    }
    
    # Добавляем адреса
    base_fields.update(generate_empty_address("counterpart_officialAddress"))
    base_fields.update(generate_empty_address("counterpart_postAddress"))
    
    return base_fields

def generate_sole_proprietor_fields() -> Dict:
    """Генерирует поля для индивидуального предпринимателя"""
    name = random.choice(NAMES)
    last_name = random.choice(LAST_NAMES)
    surname = random.choice(SURNAMES)
    
    base_fields = {
        "counterpart_type": "SoleProprietor",
        "counterpart_name": name,
        "counterpart_lastName": last_name,
        "counterpart_surname": surname,
        "counterpart_tel": f"+7{random.randint(900, 999)}{random.randint(1000000, 9999999)}",
        "counterpart_title": f"ИП {last_name} {name[0]}.{surname[0]}.",
        "counterpart_taxID": f"{random.randint(1000000000, 9999999999)}",
        "counterpart_kpp": f"{random.randint(100000000, 999999999)}",
        "counterpart_currentAcc": f"{random.randint(10000000000000000000, 99999999999999999999)}",
        "counterpart_bank": random.choice(BANKS),
        "counterpart_correspondentAcc": f"{random.randint(10000000000000000000, 99999999999999999999)}",
        "counterpart_bik": f"{random.randint(100000000, 999999999)}",
        "counterpart_ogrn_ogrnip": f"{random.randint(1000000000000, 9999999999999)}",
        "counterpart_director": f"{last_name} {name} {surname}",
        "counterpart_directorInShort": f"{last_name[0]}.{name[0]}."
    }
    
    # Добавляем адреса
    base_fields.update(generate_address("counterpart_officialAddress"))
    base_fields.update(generate_address("counterpart_postAddress"))
    
    return base_fields

def generate_organization_fields() -> Dict:
    """Генерирует поля для организации"""
    name = random.choice(NAMES)
    last_name = random.choice(LAST_NAMES)
    surname = random.choice(SURNAMES)
    
    base_fields = {
        "counterpart_type": "Organization",
        "counterpart_name": name,
        "counterpart_lastName": last_name,
        "counterpart_surname": surname,
        "counterpart_tel": f"+7{random.randint(900, 999)}{random.randint(1000000, 9999999)}",
        "counterpart_title": f"ООО '{random.choice(['Техно', 'Строй', 'Транс', 'Логист', 'Сервис'])}{random.randint(1, 100)}'",
        "counterpart_taxID": f"{random.randint(1000000000, 9999999999)}",
        "counterpart_kpp": f"{random.randint(100000000, 999999999)}",
        "counterpart_currentAcc": f"{random.randint(10000000000000000000, 99999999999999999999)}",
        "counterpart_bank": random.choice(BANKS),
        "counterpart_correspondentAcc": f"{random.randint(10000000000000000000, 99999999999999999999)}",
        "counterpart_bik": f"{random.randint(100000000, 999999999)}",
        "counterpart_ogrn_ogrnip": f"{random.randint(1000000000000, 9999999999999)}",
        "counterpart_director": f"{last_name} {name} {surname}",
        "counterpart_directorInShort": f"{last_name[0]}.{name[0]}."
    }
    
    # Добавляем адреса
    base_fields.update(generate_address("counterpart_officialAddress"))
    base_fields.update(generate_address("counterpart_postAddress"))
    
    return base_fields

def generate_counterparty_fields() -> Dict:
    """Генерирует поля контрагента согласно типу"""
    counterparty_type = random.choice(["PersonalPartner", "SoleProprietor", "Organization"])
    
    if counterparty_type == "PersonalPartner":
        return generate_personal_partner_fields()
    elif counterparty_type == "SoleProprietor":
        return generate_sole_proprietor_fields()
    else:
        return generate_organization_fields()

def generate_user_trip(date: str) -> Dict:
    """Генерирует одну поездку с плоской структурой"""
    mileage = random.randint(50, 500)
    fuel_consumption = round(mileage * random.uniform(0.08, 0.15), 1)
    fuel_cost = round(fuel_consumption * random.uniform(45, 55), 2)
    revenue = random.randint(1000, 10000)
    other_costs = random.randint(100, 500)
    office_cost = random.randint(200, 800)
    
    # Генерируем поля контрагента
    counterparty_fields = generate_counterparty_fields()
    
    # Для PersonalPartner taxCost = 0, для других - случайное значение
    if counterparty_fields["counterpart_type"] == "PersonalPartner":
        tax_cost = 0
    else:
        tax_cost = round(random.uniform(50, 300), 2)
    
    prime_cost = fuel_cost + other_costs + office_cost + tax_cost
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
        "taxCost": tax_cost,
        "primeCost": round(prime_cost, 2),
        "officeCost": office_cost,
        "otherCost": other_costs,
        "revenue": revenue,
        "margin": round(margin, 2),
        "marginality": marginality
    }
    
    # Добавляем все поля контрагента в основной объект
    trip.update(counterparty_fields)
    
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
        counterparty_types = [trip['counterpart_type'] for trip in user_trips]
        personal_count = counterparty_types.count("PersonalPartner")
        sole_count = counterparty_types.count("SoleProprietor")
        org_count = counterparty_types.count("Organization")
        
        print(f"\nСтатистика по контрагентам:")
        print(f"  PersonalPartner: {personal_count} ({personal_count/total_trips*100:.1f}%)")
        print(f"  SoleProprietor: {sole_count} ({sole_count/total_trips*100:.1f}%)")
        print(f"  Organization: {org_count} ({org_count/total_trips*100:.1f}%)")
        
        # Статистика по taxCost
        trips_with_zero_tax = sum(1 for trip in user_trips if trip['taxCost'] == 0)
        print(f"Поездок с taxCost = 0: {trips_with_zero_tax} ({trips_with_zero_tax/total_trips*100:.1f}%)")
        
        # Показываем пример данных
        if user_trips:
            print(f"\nПример данных (первая поездка):")
            sample_trip = user_trips[0]
            print(f"ID: {sample_trip['id']}")
            print(f"Дата: {sample_trip['date']}")
            print(f"Водитель: {sample_trip['driver']}")
            print(f"Тип контрагента: {sample_trip['counterpart_type']}")
            print(f"TaxCost: {sample_trip['taxCost']}")
            
            if sample_trip['counterpart_type'] == 'PersonalPartner':
                print(f"Имя: {sample_trip['counterpart_name']}")
                print(f"Телефон: {sample_trip['counterpart_tel']}")
            else:
                print(f"Название: {sample_trip['counterpart_title']}")
                print(f"Директор: {sample_trip['counterpart_director']}")
                print(f"Официальный адрес: {sample_trip['counterpart_officialAddress_region']}, {sample_trip['counterpart_officialAddress_city']}")
                print(f"Почтовый адрес: {sample_trip['counterpart_postAddress_region']}, {sample_trip['counterpart_postAddress_city']}")
            
    except ValueError as e:
        print(f"Ошибка в формате даты: {e}")
    except Exception as e:
        print(f"Произошла ошибка: {e}")

if __name__ == "__main__":
    main()
