import datetime
now = datetime.datetime.now()
hora = now.hour
if 0 <= hora < 12:
    print('Bom dia!')
elif hora < 18:
    print('Boa Tarde!')
elif hora < 23:
    print('Boa noite!')
