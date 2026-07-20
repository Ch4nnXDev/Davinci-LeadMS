"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { useState } from "react"


interface DataTableProps {
  data: {
    id: number
    header: string
    type: string
    status: string
    target: string
    limit: string
    reviewer: string
  }[]
}


export function DataTable({
  data,
}: DataTableProps) {

  const [page, setPage] = useState(0)

  const pageSize = 10

  const start = page * pageSize
  const currentData = data.slice(start, start + pageSize)

  const totalPages = Math.ceil(data.length / pageSize)


  return (
    <div className="rounded-md border p-10">

      <Table>

        <TableHeader>

          <TableRow>

            <TableHead>Lead</TableHead>
            <TableHead>Mobile Number</TableHead>
            <TableHead>Region</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Platform</TableHead>
            <TableHead>Assigned To</TableHead>

          </TableRow>

        </TableHeader>


        <TableBody>

          {
            currentData.length > 0 ? (

              currentData.map((item) => (

                <TableRow key={item.id}>

                  <TableCell>
                    {item.header}
                  </TableCell>

                  <TableCell>
                    {item.type}
                  </TableCell>

                  <TableCell>
                    {item.status}
                  </TableCell>

                  <TableCell>
                    {item.target}
                  </TableCell>

                  <TableCell>
                    {item.limit}
                  </TableCell>

                  <TableCell>
                    {item.reviewer}
                  </TableCell>

                </TableRow>

              ))

            ) : (

              <TableRow>

                <TableCell
                  colSpan={6}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>

              </TableRow>

            )
          }


        </TableBody>

      </Table>


      <div className="flex items-center justify-end gap-3 p-4">


        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          Previous
        </Button>


        <span className="text-sm">
          Page {page + 1} of {totalPages}
        </span>


        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPages - 1}
        >
          Next
        </Button>


      </div>


    </div>
  )
}