from ventas import Venta

venta = Venta()

opcion = int(input("¿Desea ingresar un ítem a la venta?\n1. Sí\n2. No\n"))


while opcion == 1:
	producto = input("\nIngrese nombre del producto vendido:\n")
	cantidad = int(input("\nIngrese cantidad vendida del producto:\n"))
	venta.modificar_detalle(producto, cantidad)
	opcion = int(input("¿Desea ingresar un ítem a la venta?\n1. Sí\n2. No\n"))

print(venta.detalle)