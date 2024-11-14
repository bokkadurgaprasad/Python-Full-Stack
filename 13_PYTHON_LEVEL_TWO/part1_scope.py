'''
x = 25

def my_func():
    x = 50
    return x
print(my_func()) 
print(x)

'''

'''
# Local
lambda x: x**2

# Enclosing function locals
name = 'This is a global name!'

def greet():
    #name = "sammy"
    
    def hello():
        print("Hello "+name)
    hello()
greet()

'''

'''
x = 50

def func(x):
    print('x is: ', x) # 50
    x = 1000
    print('local x changed to: ',x) # 1000
    
func(x)
print("Outside of func: ",x) # 50
'''
'''
x = 50

def func():
    global x
    x = 1000

print("Befor func call :",x)
func()
print("After func call: ",x)
'''

x = 50

def func():
    # global x
    x = 1000
    return x

print("Befor func call :",x)
x = func()
print("After func call: ",x)
