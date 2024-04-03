def dev_skills(dev_name, **kwargs):
  # kwargs will be a dictionary!
  dev = {'name': dev_name, 'skills': kwargs}
  return dev

print(dev_skills('Jackie', HTML=5, CSS=3, JavaScript=4, Python=2))

#ex1
def sum_to(n):
  total=0
  for num in range(1,n+1):
    total=total+num
  return total

print(sum_to(6))


#ex2
def largest(list):
  largest = list[0]
  for num in list:
    if (num > largest):
      largest = num

  return largest
print(largest([1, 2, 3, 4, 0]))

#ex3

def occurrences(str1,str2):
  count=0
  index = str1.find(str2)
  while index!=-1:
      count+=1
      index = str1.find(str2,index+1)
  return count

print(occurrences('fleep floop', 'e'))


#ex4
def product(*args):
  total=1
  for arg in args:
    total=total*arg
  return total

print(product(2, 5, 5))