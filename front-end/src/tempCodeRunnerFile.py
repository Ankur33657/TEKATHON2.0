source_file_name = "file.txt"
destination_file_name= "destination.txt"

with open(source_file_name,"r") as source_file:
    contents = source_file.read()
    source file.close()
    
with open(destination_file_name,"w") as destination_file:
    destination_file.write(contents)
    destination_file.close()
print ("file copied successfully")